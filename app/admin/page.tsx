"use client";

import React, { useEffect, useState,JSX } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import KonfirmasiBerkas from "@/components/admin/KonfirmasiBerkas";

interface Summary {
  totalUsers: number;
  totalReports: number;
  totalAchievements: number;
}

export default function AdminDashboard(): JSX.Element {
  const [summary, setSummary] = useState<Summary>({
    totalUsers: 0,
    totalReports: 0,
    totalAchievements: 0,
  });

  const supabase = createClientComponentClient();

  useEffect(() => {
    const fetchData = async () => {
      const [{ count: users }, { count: reports }, { count: achievements }] = await Promise.all([
        supabase.from("profiles").select("*", { count: "exact", head: true }),
        supabase.from("laporan_khs").select("*", { count: "exact", head: true }),
        supabase.from("prestasi").select("*", { count: "exact", head: true }),
      ]);

      setSummary({
        totalUsers: users || 0,
        totalReports: reports || 0,
        totalAchievements: achievements || 0,
      });
    };

    fetchData();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard Admin</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Mahasiswa" value={summary.totalUsers} />
        <Card title="Pelaporan Masuk" value={summary.totalReports} />
        <Card title="Prestasi Diunggah" value={summary.totalAchievements} />
      </div>
      <KonfirmasiBerkas />
    </main>
  );
}

function Card({ title, value }: { title: string; value: number }) {
  return (
    <div className="bg-white shadow rounded-lg p-6 text-center">
      <h2 className="text-gray-600 text-lg">{title}</h2>
      <p className="text-3xl font-bold text-secondary">{value}</p>
    </div>
  );
}
