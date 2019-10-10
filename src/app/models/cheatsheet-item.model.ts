export class CheatsheetItem {
    id: number;
    name: string;
    description: string;
    installCommand?: string;
    downloadLink?: string;
    docs: string;
    isSelected: boolean;
}