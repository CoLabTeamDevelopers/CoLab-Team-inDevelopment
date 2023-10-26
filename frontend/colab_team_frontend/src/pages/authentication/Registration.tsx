import { yupResolver } from '@hookform/resolvers/yup';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Box, Button, Link, Slide, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Waves from '@/assets/svg/Waves';
import Logo from '@/components/Logo';
import { registrationSchema } from '@/schemas/auth';
import styles from '@/styles/auth';

export default function RegistrationPage() {
  const [continueForm, setContinueForm] = useState(false);
  const { register, handleSubmit } = useForm({ resolver: yupResolver(registrationSchema) });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Box sx={styles.box}>
      <Logo />
      <Typography fontSize={25} sx={{ textAlign: 'center', color: '#673ab7' }} fontFamily="Roboto">
        Register
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
        {!continueForm && (
          <Slide direction="right" in={!continueForm} mountOnEnter unmountOnExit>
            <Box sx={styles.form}>
              <TextField
                autoComplete="true"
                variant="outlined"
                type="text"
                label="Username"
                sx={styles.textField}
                {...register('username')}
              />
              <TextField
                autoComplete="true"
                variant="outlined"
                type="email"
                label="Email"
                sx={styles.textField}
                {...register('email')}
              />
            </Box>
          </Slide>
        )}
        {continueForm ? (
          <Slide direction="right" in={continueForm} mountOnEnter unmountOnExit>
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
        ) : undefined}
        {continueForm ? (
          <Button type="submit" variant="contained" sx={styles.button}>
            Submit
          </Button>
        ) : (
          <Button variant="contained" sx={styles.button} onClick={() => setContinueForm(true)}>
            Continue
          </Button>
        )}
        <Box
          sx={{
            display: 'flex',
            justifyContent: continueForm ? 'space-between' : 'center',
            alignItems: 'center',
          }}
        >
          {continueForm && (
            <Button
              variant="contained"
              sx={styles.backButton}
              onClick={() => setContinueForm(false)}
            >
              <NavigateBeforeIcon sx={{ fontSize: '15px' }} />
            </Button>
          )}
          <Typography
            fontSize={15}
            color="#757575"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            Already a user?&nbsp;
            <Link href="#" sx={{ color: '#9575cd' }}>
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
