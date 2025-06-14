// app/invoices/page.js  (or app/invoices/page.tsx)

import { cookies } from "next/headers"
import { createClient } from "@/utils/supabase/server"

export default async function Page() {
  const cookieStore = cookies()
  const supabase = await createClient(cookieStore)

  const { data: invoices, error } = await supabase.from("invoices").select("*")

  if (error) {
    return (
      <div className="container mx-auto py-8 text-center">
        <h2 className="text-red-500">Error: {error.message}</h2>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4 text-center">Invoices</h1>

      {/* Invoice Table Container */}
      <table className="w-full border-collapse border rounded-lg shadow-md overflow-x-scroll">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 text-left font-bold border">Client Name</th>
            <th className="px-4 py-2 bg-gray-200 text-left font-bold border">Amount (€)</th>
            <th className="px-4 py-2 bg-gray-200 text-left font-bold border">Date</th>
            <th className="px-4 py-2 bg-gray-200 text-left font-bold border">Status</th>
            <th className="px-4 py-2 bg-gray-200 text-left font-bold border">Description</th>
          </tr>
        </thead>
        <tbody>
          {invoices?.map((invoice) => (
            <tr key={invoice.id} className="border-b border-gray-300">
              <td className="px-4 py-2 text-left">{invoice.client_name}</td>
              <td className="px-4 py-2 text-left">{invoice.amount}€</td>
              <td className="px-4 py-2 text-left">{new Date(invoice.due_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long', // Use 'long' for full month name (January)
                  day: 'numeric',
                })}</td>
              <td className="px-4 py-2 text-left">{invoice.status}</td>
              <td className="px-4 py-2 text-left">{invoice.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

       {/* Empty State (if no invoices) */}
      {invoices?.length === 0 && (
        <div className="container mx-auto py-8 text-center">
          <p>No invoices found.</p>
        </div>
      )}
    </div>
  )
}
