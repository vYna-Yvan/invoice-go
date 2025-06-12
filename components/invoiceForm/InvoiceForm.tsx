// components/InvoiceForm.tsx
"use client"
import { useState } from "react"

export default function InvoiceForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [form, setForm] = useState({
    client_name: "",
    amount: "",
    due_date: "",
    description: "",
    status: "en attente"
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="client_name" placeholder="Nom du client" value={form.client_name} onChange={handleChange} className="border p-2 w-full" />
      <input name="amount" type="number" placeholder="Montant (€)" value={form.amount} onChange={handleChange} className="border p-2 w-full" />
      <input name="due_date" type="date" value={form.due_date} onChange={handleChange} className="border p-2 w-full" />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-2 w-full" />
      <select name="status" value={form.status} onChange={handleChange} className="border p-2 w-full">
        <option value="en attente">En attente</option>
        <option value="payé">Payé</option>
        <option value="en retard">En retard</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Créer la facture</button>
    </form>
  )
}
