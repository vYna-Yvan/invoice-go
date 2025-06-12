"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InvoiceForm from "@components/invoiceForm/InvoiceForm";
import { createClient } from "@/utils/supabase/client";

type InvoiceData = {
  client_name: string;
  amount: number;
  due_date: string;  
  status: string;
  description: string;
};

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();
  const supabase = createClient();

  const handleSubmit = async (data: InvoiceData) => {
    setLoading(true);
    setErrorMsg("");

    const { error } = await supabase.from("invoices").insert([data]);

    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    router.push("/"); // redirige vers la page d'accueil
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Créer une nouvelle facture</h1>
      {errorMsg && <p className="text-red-500 mb-4">Erreur : {errorMsg}</p>}
      <InvoiceForm onSubmit={handleSubmit} />
      {loading && <p className="text-gray-500 mt-2">Enregistrement en cours...</p>}
    </div>
  );
}
