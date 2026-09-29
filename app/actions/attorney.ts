"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { AttorneyRole, Attorney } from "@prisma/client";

export interface AttorneyInput {
  name: string;
  role: AttorneyRole;
  title: string;
  bio: string;
  photoUrl?: string;
  email?: string;
  phone?: string;
  education: string[];
  expertise: string[];
  trackRecords?: string[];
  order?: number;
}

export type ActionResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};

// 1. Ambil Semua Data Advokat
export async function getAttorneys(): Promise<ActionResponse<Attorney[]>> {
  try {
    const attorneys = await prisma.attorney.findMany({
      orderBy: [{ order: "asc" }, { createdAt: "desc" }],
    });
    return { success: true, data: attorneys };
  } catch (error) {
    console.error("Failed to fetch attorneys:", error);
    return { success: false, error: "Gagal mengambil data pengacara." };
  }
}

// 2. Ambil Detail Advokat berdasarkan ID
export async function getAttorneyById(id: string): Promise<ActionResponse<Attorney>> {
  try {
    const attorney = await prisma.attorney.findUnique({
      where: { id },
    });

    if (!attorney) {
      return { success: false, error: "Pengacara tidak ditemukan." };
    }

    return { success: true, data: attorney };
  } catch (error) {
    console.error("Failed to fetch attorney:", error);
    return { success: false, error: "Gagal mengambil detail pengacara." };
  }
}

// 3. Tambah Advokat Baru
export async function createAttorney(data: AttorneyInput): Promise<ActionResponse<Attorney>> {
  try {
    const newAttorney = await prisma.attorney.create({
      data: {
        name: data.name,
        role: data.role,
        title: data.title,
        bio: data.bio,
        photoUrl: data.photoUrl || null,
        email: data.email || null,
        phone: data.phone || null,
        education: data.education,
        expertise: data.expertise,
        trackRecords: data.trackRecords || [],
        order: data.order ?? 0,
      },
    });

    revalidatePath("/tim-pengacara");
    revalidatePath("/admin/pengacara");

    return {
      success: true,
      message: "Data pengacara berhasil ditambahkan.",
      data: newAttorney,
    };
  } catch (error) {
    console.error("Failed to create attorney:", error);
    return { success: false, error: "Gagal menambah data pengacara baru." };
  }
}

// 4. Perbarui Data Advokat
export async function updateAttorney(
  id: string,
  data: Partial<AttorneyInput>
): Promise<ActionResponse<Attorney>> {
  try {
    const updatedAttorney = await prisma.attorney.update({
      where: { id },
      data: {
        ...(data.name && { name: data.name }),
        ...(data.role && { role: data.role }),
        ...(data.title && { title: data.title }),
        ...(data.bio && { bio: data.bio }),
        ...(data.photoUrl !== undefined && { photoUrl: data.photoUrl }),
        ...(data.email !== undefined && { email: data.email }),
        ...(data.phone !== undefined && { phone: data.phone }),
        ...(data.education && { education: data.education }),
        ...(data.expertise && { expertise: data.expertise }),
        ...(data.trackRecords !== undefined && { trackRecords: data.trackRecords }),
        ...(data.order !== undefined && { order: data.order }),
      },
    });

    revalidatePath("/tim-pengacara");
    revalidatePath(`/tim-pengacara/${id}`);
    revalidatePath("/admin/pengacara");

    return {
      success: true,
      message: "Data pengacara berhasil diperbarui.",
      data: updatedAttorney,
    };
  } catch (error) {
    console.error("Failed to update attorney:", error);
    return { success: false, error: "Gagal memperbarui data pengacara." };
  }
}

// 5. Hapus Data Advokat
export async function deleteAttorney(id: string): Promise<ActionResponse<null>> {
  try {
    await prisma.attorney.delete({
      where: { id },
    });

    revalidatePath("/tim-pengacara");
    revalidatePath("/admin/pengacara");

    return {
      success: true,
      message: "Data pengacara berhasil dihapus.",
    };
  } catch (error) {
    console.error("Failed to delete attorney:", error);
    return { success: false, error: "Gagal menghapus data pengacara." };
  }
}