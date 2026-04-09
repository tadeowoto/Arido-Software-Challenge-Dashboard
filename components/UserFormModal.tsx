import { X, User, Lock, Shield } from "lucide-react";
import groupsResponse from "@/mocks/groupsResponse.json";
import { SubmitHandler, useForm } from "react-hook-form";

interface UserFormModalProps {
  open: boolean;
  onclose: () => void;
}

interface FormData {
  username: string;
  password: string;
  group: string;
  permission: string;
}

export default function UserFormModal({ open, onclose }: UserFormModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

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
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "La contraseña debe contener mayúsculas, minúsculas, números y caracteres especiales",
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
            <div className="flex items-center gap-2 text-slate-700">
              <Shield className="w-4 h-4" />
              <label className="text-sm font-semibold">
                Asignar Permisos y Grupos de acceso
              </label>
            </div>
          </div>
          <div className="flex gap-2 items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div>
              <select
                {...register("group", {
                  required: {
                    value: true,
                    message: "Debe seleccionar un grupo",
                  },
                })}
                className="  flex-1 text-sm focus:outline-none text-slate-700"
              >
                <option value="">Grupos</option>
                {groupsResponse.map((group, index) => (
                  <option key={index} value={group.name}>
                    {group.name}
                  </option>
                ))}
              </select>
              {errors.group && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.group.message}
                </p>
              )}
            </div>
            <div>
              <select
                {...register("permission", {
                  required: {
                    value: true,
                    message: "Debe seleccionar un permiso",
                  },
                })}
                className="w-24  text-black border border-slate-200 rounded-lg py-1 px-2 text-xs focus:outline-none"
              >
                <option value="">Permisos</option>
                <option value="read">Read</option>
                <option value="write">Write</option>
                <option value="admin">Admin</option>
                <option value="owner">Owner</option>
              </select>
              {errors.permission && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.permission.message}
                </p>
              )}
            </div>
          </div>
          <button className="w-full py-3 bg-[#0ea5e9] hover:bg-[#0284c7] text-white rounded-xl font-bold text-sm shadow-lg shadow-sky-500/20 transition-all active:scale-[0.98] mt-4">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}
