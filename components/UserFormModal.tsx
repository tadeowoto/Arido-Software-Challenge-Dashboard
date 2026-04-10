import { X, User, Lock, Shield, Plus, Trash2 } from "lucide-react";
import groupsResponse from "@/mocks/groupsResponse.json";
import { useForm, useFieldArray } from "react-hook-form";
import { userService } from "@/services/userService";
import type { FormData } from "@/types/groupTypes";

interface UserFormModalProps {
  open: boolean;
  onclose: () => void;
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

  const onSubmit = async (data: FormData) => {
    try {
      const res = await userService.create(data);
      console.log("Usuario creado exitosamente:", res);
      onclose();
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      alert(error instanceof Error ? error.message : "Error desconocido");
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-text-primary/40 backdrop-blur-sm transition-opacity"
        onClick={onclose}
      />

      <div className="relative bg-surface-light w-full max-w-lg rounded-xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200 border border-border-light">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-light">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 rounded-full bg-highlight-orange" />
            <div>
              <h2 className="text-base font-semibold text-text-primary">
                Crear Nuevo Usuario
              </h2>
              <p className="text-xs text-text-secondary mt-0.5">
                Por favor, ingrese los detalles del nuevo usuario.
              </p>
            </div>
          </div>
          <button
            onClick={onclose}
            className="p-1.5 hover:bg-bg-light rounded-lg transition-colors text-text-secondary hover:text-text-primary"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form className="p-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-text-secondary uppercase tracking-wide">
              Nombre de Usuario
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
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
                      "El nombre de usuario debe tener como máximo 20 caracteres",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9_]+$/,
                    message: "Solo letras, números y guiones bajos",
                  },
                })}
                type="text"
                placeholder="Pedro Pérez..."
                className="w-full pl-10 pr-4 py-2.5 bg-bg-light border border-border-light rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-highlight-blue/15 focus:border-highlight-blue transition-all text-text-primary placeholder:text-text-secondary"
              />
            </div>
            {errors.username && (
              <p className="text-xs text-red-500 mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-text-secondary uppercase tracking-wide">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
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
                      "Debe tener mayúscula, minúscula, número y carácter especial (10–64 chars)",
                  },
                })}
                type="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 bg-bg-light border border-border-light rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-highlight-blue/15 focus:border-highlight-blue transition-all text-text-primary"
              />
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="space-y-3 pt-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-text-primary">
                <Shield className="w-4 h-4 text-highlight-orange" />
                <label className="text-xs font-medium uppercase tracking-wide text-text-secondary">
                  Grupos y Permisos
                </label>
              </div>
              <button
                type="button"
                onClick={() =>
                  append({ groupId: undefined, levelAccessId: undefined })
                }
                className="text-xs flex items-center gap-1 text-highlight-blue hover:opacity-80 font-medium transition-opacity"
              >
                <Plus className="w-3 h-3" /> Agregar Grupo
              </button>
            </div>

            {fields.map((field, index) => (
              <div key={field.id} className="space-y-1.5">
                <div className="flex gap-2 items-center p-3 bg-bg-light rounded-lg border border-border-light">
                  <div className="flex-1">
                    <select
                      {...register(
                        `userGroupsAndLevelAccess.${index}.groupId`,
                        {
                          required: "Campo requerido",
                          valueAsNumber: true,
                        },
                      )}
                      className="w-full bg-transparent text-sm focus:outline-none text-text-primary"
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
                      className="w-full bg-surface-light border border-border-light rounded-lg py-1.5 px-2 text-xs text-text-primary focus:outline-none focus:border-highlight-blue transition-colors"
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
                      className="text-text-secondary hover:text-red-500 p-1 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                {errors.userGroupsAndLevelAccess?.[index] && (
                  <p className="text-[10px] text-red-500 px-1">
                    Ambos campos son obligatorios en esta fila
                  </p>
                )}
              </div>
            ))}
          </div>

          <button className="w-full py-2.5 bg-highlight-orange hover:opacity-90 text-white rounded-lg font-medium text-sm transition-all active:scale-[0.98] mt-2">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}
