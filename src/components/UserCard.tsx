import type { IUser } from "../types/User"

interface Props {
  user: IUser
  onClick: () => void
}

const UserCard = ({ user, onClick }: Props) => {

  return (

    <div className="card" onClick={onClick}>

      <h3>{user.name}</h3>

      <p>{user.email}</p>

      <p>{user.company.name}</p>

    </div>

  )

}

export default UserCard