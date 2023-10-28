import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Link, Slide, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import Waves from '@/assets/svg/Waves';
import Logo from '@/components/Logo';
import { loginSchema } from '@/schemas/auth';
import styles from '@/styles/auth';

export default function LoginPage() {
  const { register, handleSubmit } = useForm({ resolver: yupResolver(loginSchema) });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Box sx={styles.box}>
      <Logo />
      <Typography fontSize={25} sx={{ textAlign: 'center', color: '#673ab7' }} fontFamily="Roboto">
        Login
      </Typography>
      <Waves />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginTop: '10px',
        }}
        component="form"
        onSubmit={onSubmit}
      >
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <Box sx={styles.form}>
            <TextField
              autoComplete="true"
              variant="outlined"
              type="email"
              label="Email"
              sx={styles.textField}
              {...register('email')}
            />
            <TextField
              autoComplete="true"
              variant="outlined"
              type="password"
              label="Password"
              sx={styles.textField}
              {...register('password')}
            />
          </Box>
        </Slide>
        <Button type="submit" variant="contained" sx={styles.button}>
          Login
        </Button>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            fontSize={15}
            color="#757575"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Link href="#" sx={{ color: '#9575cd' }}>
              &nbsp;Forgot Password ?
            </Link>
          </Typography>
          <Typography
            fontSize={15}
            color="#757575"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            Not a user ?
            <Link href="#" sx={{ color: '#9575cd' }}>
              &nbsp;Signup
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
