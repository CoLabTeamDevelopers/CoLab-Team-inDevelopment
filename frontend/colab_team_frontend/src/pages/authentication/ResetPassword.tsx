import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Slide, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import Waves from '@/assets/svg/Waves';
import Logo from '@/components/Logo';
import { resetPasswordSchema } from '@/schemas/auth';
import styles from '@/styles/auth';

export default function ResetPasswordPage() {
  const { register, handleSubmit } = useForm({ resolver: yupResolver(resetPasswordSchema) });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Box sx={styles.box}>
      <Logo />
      <Typography fontSize={25} sx={{ textAlign: 'center', color: '#673ab7' }} fontFamily="Roboto">
        Reset Password
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
              type="password"
              label="New Password"
              sx={styles.textField}
              {...register('password')}
            />
            <TextField
              autoComplete="true"
              variant="outlined"
              type="password"
              label="Confirm Password"
              sx={styles.textField}
              {...register('confirmPassword')}
            />
          </Box>
        </Slide>
        <Button type="submit" variant="contained" sx={styles.button}>
          Reset Password
        </Button>
      </Box>
    </Box>
  );
}
