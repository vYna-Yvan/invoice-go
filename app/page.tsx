import { cookies } from "next/headers"
import { createClient } from "@/utils/supabase/server"

export default async function Page() {
  const cookieStore = cookies()
  const supabase = await createClient(cookieStore)

  const { data: invoices, error } = await supabase.from("invoices").select("*")
  console.log("invoices", invoices)
  

  if (error) {
    return <div>Erreur : {error.message}</div>
  }

  return (
    <ul>
      {invoices?.map((invoice) => (
        <li key={invoice.id}>
          {invoice.client_name} - {invoice.amount}€ - {invoice.date} - {invoice.status} - {invoice.description}
        </li>
      ))}
    </ul>
  )
}
