export interface CardTitleType {
  title: string;
  isEdit: boolean;
  toggleEdit?: () => void; // set it to mandatory
}

export interface CardType extends CardTitleType {
  children: React.ReactNode;
}
