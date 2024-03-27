import { z } from 'zod'

export const FormDataSchema = z.object({
  firstName: z.string().min(1, 'Los nombres son requeridos'),
  lastName: z.string().min(1, 'Los apellidos son requeridos'),
  email: z.string().min(1, 'El email es requerido').email('El email no es válido'),

  country: z.string().min(1, 'El pais es requerido'),
  street: z.string().min(1, 'La direccion es requerida'),
  city: z.string().min(1, 'La ciudad es requerida'),
  state: z.string().min(1, 'la region es requerida'),
  zip: z.string().min(1, 'Zip is required')
})
