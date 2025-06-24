import Link from 'next/link'
import {  signup } from './actions'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form className="bg-white shadow-md rounded px-8 py-8 w-full max-w-sm flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">Création d'un profil</h1>
        <label htmlFor="userName" className="text-gray-700">UserName</label>
        <input
          id="userName"
          name="userName"
          type="userName"
          required
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="email" className="text-gray-700">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="password" className="text-gray-700">Mot de passe</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
       
        <button
          formAction={signup}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded transition"
        >
          S'inscrire
        </button>
        <Link className="text-center text-blue-600 hover:underline mt-4" href="./login">
          Déjà un compte ?
        </Link>

      </form>
    </div>
  )
}