export default function useOnClickOutside(component: any, callback: unknown): {
    listener: (event: Event) => void;
} | undefined;
