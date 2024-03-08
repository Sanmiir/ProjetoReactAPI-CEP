import {z} from 'zod'

export const cepFormSchema = z.object({
    cep: z.string().min(8, 'CEP deve ter 8 dígitos').refine((cep) => /^\d{5}\d{3}$/.test(cep), {
        message:  "CEP inválido, deve conter o formato 12345678"
        }),

})