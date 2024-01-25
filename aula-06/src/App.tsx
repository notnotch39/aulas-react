import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const formDataSchema = z.object({
  nome: z.string().min(2, "O nome deve ter ao menos 2 caracteres."),
  email: z.string()
    .min(5, "O email deve ter ao menos 5 carcteres.")
    .email("Insira um email válido."),
  idade: z.coerce.number({invalid_type_error: "aaaa"}).max(150).min(0).optional()
})

type FormProps = z.infer<typeof formDataSchema>

function App() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormProps>({
    resolver: zodResolver(formDataSchema),
    reValidateMode: "onSubmit",
    mode: "onSubmit", 
  })  

  async function handleSubmitForm(data: FormProps) {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      {isSubmitting && <p>Carregando</p>}

      <label htmlFor="campo-nome">Nome:</label>
      <input type="text" id="campo-nome" placeholder="John Doe" {...register("nome")} />
      {errors.nome && <p>{errors.nome.message}</p>}

      <label htmlFor="campo-email">Email:</label>
      <input type="email" id="campo-email" placeholder="johndoe@gmail.com" {...register("email")} />
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor="campo-idade">Idade:</label>
      <input type="number" id="campo-idade" {...register("idade")} />
      {errors.idade && <p>{errors.idade.message}</p>}

      <button type="submit">Enviar</button>
    </form>
  )
}

export default App
