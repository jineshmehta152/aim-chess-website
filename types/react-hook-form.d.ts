declare module "react-hook-form" {
  export type FieldValues = Record<string, any>;
  export type FieldPath<TFieldValues extends FieldValues = FieldValues> = string;

  export type ControllerRenderProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
  > = {
    onChange: (...event: any[]) => void;
    onBlur: () => void;
    value: any;
    name: TName;
    ref: any;
  };

  export type ControllerFieldState = {
    invalid: boolean;
    isTouched: boolean;
    isDirty: boolean;
    error?: {
      message?: string;
      type?: string;
    };
  };

  export type UseFormStateReturn<TFieldValues extends FieldValues> = {
    isDirty: boolean;
    isLoading: boolean;
    isSubmitted: boolean;
    isSubmitSuccessful: boolean;
    isSubmitting: boolean;
    isValidating: boolean;
    isValid: boolean;
    submitCount: number;
    errors: Record<string, any>;
  };

  export type ControllerProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
  > = {
    name: TName;
    control?: any;
    rules?: any;
    shouldUnregister?: boolean;
    defaultValue?: any;
    render: (props: {
      field: ControllerRenderProps<TFieldValues, TName>;
      fieldState: ControllerFieldState;
      formState: UseFormStateReturn<TFieldValues>;
    }) => any;
  };

  export const Controller: any;
  export const FormProvider: any;
  export function useFormContext(): any;
  export function useFormState(props?: any): UseFormStateReturn<any>;
  export function useForm<TFieldValues extends FieldValues = FieldValues>(props?: any): any;
}
