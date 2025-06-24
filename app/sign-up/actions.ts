'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Création de l'utilisateur
  const { data: signUpData, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
    },
  })

  if (error) {
    console.error('Signup error:', error)
    redirect('/error')
  }

  // Optionnel : insertion dans une table `profiles`
  const userId = signUpData.user?.id
  if (userId) {
    const { error: profileError } = await supabase.from('profiles').insert([
      {
        id: userId,
        email,
        name,
      },
    ])

    if (profileError) {
      console.error('Profile insert error:', profileError)
      redirect('/error')
    }
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}