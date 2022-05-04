interface AuthInputProps {
  label: string;
  value: any;
  required?: boolean;
  WhenRenderNot?: boolean;
  type?: "text" | "email" | "password";
  valorMudou: (novoValor: any) => void;
}

export default function AuthInput(props: AuthInputProps) {
  return props.WhenRenderNot ? null : (
    <div className='flex flex-col mt-4'>
      <label>{props.label}</label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        required={props.required}
        className={`
                  px-4 py-3 rounded-lg bg-gray-200 mt-2
                  border focus:border-blue-500 focus:bg-white
                  focus:outline-none
              `}
      />
    </div>
  );
}
