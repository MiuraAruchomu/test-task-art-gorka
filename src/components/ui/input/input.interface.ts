export interface IinputWrapperProps {
  field: string;
  placeholder: string;
  required: boolean;
  updateConfig: ({ field, value }: { field: string; value: string }) => void;
  updateError: (value: string | null) => void;
  children: React.ReactNode;
}
