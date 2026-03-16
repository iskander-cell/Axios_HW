import { Card, CardContent, Typography, Button } from "@mui/material"

import type { IUser } from "../types/User"

interface Props {
  user: IUser
  onClick: () => void
}

const UserCard = ({ user, onClick }: Props) => {

  return (

    <Card>

      <CardContent>

        <Typography variant="h6">
          {user.name}
        </Typography>

        <Typography color="text.secondary">
          {user.email}
        </Typography>

        <Typography variant="body2" mb={2}>
          {user.company.name}
        </Typography>

        <Button
          variant="outlined"
          onClick={onClick}
        >
          View Posts
        </Button>

      </CardContent>

    </Card>

  )

}

export default UserCard