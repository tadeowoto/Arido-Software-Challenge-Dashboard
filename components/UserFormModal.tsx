import { X, User, Lock, Shield, Plus, Trash2 } from "lucide-react";
import groupsResponse from "@/mocks/groupsResponse.json";
import { useForm, useFieldArray } from "react-hook-form";
import type { SecurityGroupAndLevelAccess } from "@/types/groupTypes";

interface UserFormModalProps {
  open: boolean;
  onclose: () => void;
}

interface FormData {
  username: string;
  password: string;
  userGroupsAndLevelAccess: SecurityGroupAndLevelAccess[];
  permission: string;
}

export default function UserFormModal({ open, onclose }: UserFormModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    defaultValues: {
      username: "",
      password: "",
      userGroupsAndLevelAccess: [
        { groupId: undefined, levelAccessId: undefined },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "userGroupsAndLevelAccess",
  });

  if (!open) return null;

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onclose}
      />

      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Crear Nuevo Usuario
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Por favor, ingrese los detalles del nuevo usuario.
            </p>
          </div>
          <button
            onClick={onclose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form className="p-6 space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-slate-700">
              Nombre de Usuario
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input
                {...register("username", {
                  required: {
                    value: true,
                    message: "El nombre de usuario es obligatorio",
                  },
                  minLength: {
                    value: 3,
                    message:
                      "El nombre de usuario debe tener al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message:
                      "El nombre de usuario debe tener como máximo 20 caracteres",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9_]+$/,
                    message:
                      "El nombre de usuario solo puede contener letras, números y guiones bajos",
                  },
                })}
                type="text"
                placeholder="Pedro Pérez..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-slate-900"
              />
              {errors.username && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-slate-700">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "La contraseña es obligatoria",
                  },
                  minLength: {
                    value: 8,
                    message: "La contraseña debe tener al menos 8 caracteres",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{10,64}$/,
                    message:
                      "La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial, y entre 10 y 64 caracteres",
                  },
                })}
                type="password"
                placeholder="********"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-slate-900"
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between text-slate-700">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <label className="text-sm font-semibold">
                  Grupos y Permisos
                </label>
              </div>
              <button
                type="button"
                onClick={() =>
                  append({ groupId: undefined, levelAccessId: undefined })
                }
                className="text-xs flex items-center gap-1 text-sky-600 hover:text-sky-700 font-bold"
              >
                <Plus className="w-3 h-3" /> Agregar Grupo
              </button>
            </div>

            {fields.map((field, index) => (
              <div key={field.id} className="space-y-2">
                <div className="flex gap-2 items-start p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex-1">
                    <select
                      {...register(
                        `userGroupsAndLevelAccess.${index}.groupId`,
                        {
                          required: "Campo requerido",
                          valueAsNumber: true,
                        },
                      )}
                      className="w-full bg-transparent text-sm focus:outline-none text-slate-700"
                    >
                      <option value="">Seleccionar Grupo</option>
                      {groupsResponse.map((g, i) => (
                        <option key={i} value={g.groupId}>
                          {g.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="w-32">
                    <select
                      {...register(
                        `userGroupsAndLevelAccess.${index}.levelAccessId`,
                        {
                          required: "Requerido",
                          valueAsNumber: true,
                        },
                      )}
                      className="w-full text-black border border-slate-200 rounded-lg py-1 px-2 text-xs focus:outline-none"
                    >
                      <option value="">Permisos</option>
                      <option value={1}>Read</option>
                      <option value={2}>Write</option>
                      <option value={3}>Admin</option>
                      <option value={4}>Owner</option>
                    </select>
                  </div>

                  {fields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="text-slate-400 hover:text-red-500 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                {errors.userGroupsAndLevelAccess?.[index] && (
                  <p className="text-[10px] text-red-500 px-2">
                    Ambos campos son obligatorios en esta fila
                  </p>
                )}
              </div>
            ))}
          </div>
          <button className="w-full py-3 bg-[#0ea5e9] hover:bg-[#0284c7] text-white rounded-xl font-bold text-sm shadow-lg shadow-sky-500/20 transition-all active:scale-[0.98] mt-4">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}
