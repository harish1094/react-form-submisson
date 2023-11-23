export interface UserContextProps {
  userData: UserDetails;
  setUserData: (userData: UserDetails) => void;
}

export interface UserDetails {
  basic: Basic;
  address: Address;
}

export type Basic = {
  name: string;
  email: string;
};

export type Address = {
  street: string;
  city: string;
  state: string;
};
