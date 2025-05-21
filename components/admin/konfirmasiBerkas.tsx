"use client";

import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Button from "@/components/Button";

interface Berkas {
  id: string;
  nama_berkas: string;
  url: string;
  status: string;
  user_id: string;
}

const KonfirmasiBerkas: React.FC = () => {
  const [berkasMasuk, setBerkasMasuk] = useState<Berkas[]>([]);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const fetchBerkas = async () => {
      const { data, error } = await supabase
        .from("berkas")
        .select("*")
        .eq("status", "pending");

      if (!error && data) setBerkasMasuk(data);
    };

    fetchBerkas();
  }, []);

  const updateStatus = async (id: string, status: "accepted" | "rejected") => {
    const { error } = await supabase
      .from("berkas")
      .update({ status })
      .eq("id", id);

    if (!error) {
      setBerkasMasuk((prev) => prev.filter((b) => b.id !== id));
    }
  };

  return (
    <section className="p-6">
      <h2 className="text-xl font-bold mb-4">Konfirmasi Berkas Administrasi</h2>
      {berkasMasuk.length === 0 ? (
        <p>Tidak ada berkas yang perlu dikonfirmasi.</p>
      ) : (
        <div className="space-y-4">
          {berkasMasuk.map((berkas) => (
            <div
              key={berkas.id}
              className="bg-white shadow-md rounded p-4 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{berkas.nama_berkas}</p>
                <a
                  href={berkas.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Lihat Berkas
                </a>
              </div>
              <div className="space-x-2">
                <Button
                  className="bg-green-600 text-white px-4 py-1"
                  onClick={() => updateStatus(berkas.id, "accepted")}
                >
                  Terima
                </Button>
                <Button
                  className="bg-red-500 text-white px-4 py-1"
                  onClick={() => updateStatus(berkas.id, "rejected")}
                >
                  Tolak
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default KonfirmasiBerkas;
