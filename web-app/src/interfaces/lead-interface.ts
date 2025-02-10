import { IContact } from './contact-interface';

export interface ILead {
  id: number;
  suburb: string
  created_date: string
  category: string
  description: string
  price: number
  contact: IContact
}
