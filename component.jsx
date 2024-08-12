/**
 * v0 by Vercel.
 * @see https://v0.dev/t/aGaXpuceAL9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [cep, setCep] = useState("")
  const [address, setAddress] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("YOUR_API_URL")
      const data = await response.json()
      setAddress(data)
    } catch (error) {
      console.error("Erro ao buscar endereço:", error)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      {!address ? (
        <Card className="w-full max-w-md p-6">
          <CardHeader>
            <CardTitle>Consultar CEP</CardTitle>
            <CardDescription>Digite o CEP abaixo para obter os detalhes do endereço.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="cep">CEP</Label>
                <Input
                  id="cep"
                  type="text"
                  placeholder="Digite o CEP"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Consultar
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <Card className="w-full max-w-md p-6">
          <CardHeader>
            <CardTitle>Endereço</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <Label>Logradouro:</Label>
              <p>{address.logradouro}</p>
            </div>
            <div>
              <Label>Bairro:</Label>
              <p>{address.bairro}</p>
            </div>
            <div>
              <Label>Cidade:</Label>
              <p>{address.localidade}</p>
            </div>
            <div>
              <Label>Estado:</Label>
              <p>{address.uf}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={() => setAddress(null)} variant="outline" className="w-full">
              Voltar
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}