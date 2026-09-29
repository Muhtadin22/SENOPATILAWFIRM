"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export interface ConsultationInput {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// 1. Submit Form Konsultasi Publik (Dipakai di Halaman Beranda / Kontak)
export async function submitConsultation(data: ConsultationInput) {
  try {
    // Validasi sederhana
    if (!data.fullName || !data.email || !data.phone || !data.message) {
      return { success: false, error: "Mohon isi semua kolom yang wajib diisi." };
    }

    const consultation = await prisma.consultation.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        subject: data.subject || "Permintaan Konsultasi Hukum",
        message: data.message,
      },
    });

    // Revalidasi count pesan di admin dashboard
    revalidatePath("/admin/dashboard");
    revalidatePath("/admin/pesan");

    return {
      success: true,
      message: "Permintaan konsultasi Anda berhasil terkirim. Tim Senopati Rahmad & Partners akan segera menghubungi Anda.",
      data: consultation,
    };
  } catch (error) {
    console.error("Failed to submit consultation:", error);
    return {
      success: false,
      error: "Terjadi kesalahan sistem saat mengirim pesan. Silakan coba beberapa saat lagi.",
    };
  }
}

// 2. Ambil Daftar Pesan Konsultasi Masuk (Admin)
export async function getConsultations() {
  try {
    const consultations = await prisma.consultation.findMany({
      orderBy: { createdAt: "desc" },
    });

    return { success: true, data: consultations };
  } catch (error) {
    console.error("Failed to fetch consultations:", error);
    return { success: false, error: "Gagal mengambil daftar pesan konsultasi." };
  }
}

// 3. Tandai Pesan Telah Dibaca (Admin)
export async function markConsultationAsRead(id: string) {
  try {
    const updated = await prisma.consultation.update({
      where: { id },
      data: { isRead: true },
    });

    revalidatePath("/admin/dashboard");
    revalidatePath("/admin/pesan");

    return {
      success: true,
      message: "Pesan berhasil ditandai sebagai dibaca.",
      data: updated,
    };
  } catch (error) {
    console.error("Failed to mark consultation as read:", error);
    return { success: false, error: "Gagal memperbarui status pesan." };
  }
}

// 4. Hapus Pesan Konsultasi (Admin)
export async function deleteConsultation(id: string) {
  try {
    await prisma.consultation.delete({
      where: { id },
    });

    revalidatePath("/admin/dashboard");
    revalidatePath("/admin/pesan");

    return {
      success: true,
      message: "Pesan konsultasi berhasil dihapus.",
    };
  } catch (error) {
    console.error("Failed to delete consultation:", error);
    return { success: false, error: "Gagal menghapus pesan konsultasi." };
  }
}