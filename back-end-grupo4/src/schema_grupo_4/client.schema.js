import { z } from "zod";
 
export const createClientSchema = z.object({
  name: z.string({required_error: "Nombre is required",}),
  ruc: z.string()
    .refine(value => value.length === 10, { message: "RUC debe ser un string válido de 10 caracteres" }),
  direction: z.string({required_error: "Direccion es requerido"},)
    .min(5,{message:"La direccion es de minimo 5 caracteres"},),
  type_client: z.string()
});