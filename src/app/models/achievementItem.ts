export interface AchievementItem {
    name: string;
    description: string;
    button: AcButton[];
}
interface AcButton {
    label: string;
    url: string;
}