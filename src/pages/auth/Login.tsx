import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { Button, TextInput, Checkbox, Paper, Stack, Alert, PasswordInput, Anchor } from '@mantine/core';

export interface FormValues {
  email: string;
  password: string;
  notifications: boolean;
}

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    validateInputOnBlur: true,
    initialValues: {
      email: '',
      password: '',
      notifications: false,
    },
    initialErrors: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => {
        if (!value.includes('@thinslices.com')) {
          return 'Email must be a @thinslices.com email';
        }
        return null;
      },
      password: (value) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
        if (!passwordRegex.test(value)) {
          return 'Password must be at least 12 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)';
        }
        return null;
      }
    },

  });

  const handleSubmit = async (values: FormValues) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Simulate API call
      console.log('Form submitted with values:', values);

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulate successful login
      if (values.email && values.password) {
        setSuccess(`Welcome back! Logged in as ${values.email}`);
        // Here you would typically redirect or update app state
      }
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <Paper withBorder shadow="md" p={30} radius="md" className="w-full max-w-md">
        <Stack>
          <h2 className='text-center mb-4'>Login</h2>

        {error && (
          <Alert color="red" title="Error">
            {error}
          </Alert>
        )}
        
        {success && (
          <Alert color="green" title="Success">
            {success}
          </Alert>
        )}

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              label="Email"
              placeholder="your@thinslices.com"
              key={form.key('email')}
              {...form.getInputProps('email')}
              disabled={isLoading}
            />

            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              key={form.key('password')}
              {...form.getInputProps('password')}
              disabled={isLoading}
            />

            <Checkbox
              label="Receive notifications"
              key={form.key('notifications')}
              {...form.getInputProps('notifications', { type: 'checkbox' })}
              disabled={isLoading}
            />

            <Button 
              type="submit" 
              loading={isLoading}
              disabled={!form.isValid()}
              fullWidth
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>

            <Anchor href="/forgot-password" className="text-center mt-2">
              Forgot password?
            </Anchor>

            <Anchor href="/register" className="text-center mt-2">
              Don't have an account? Register
            </Anchor>

          </Stack>
        </form>
      </Stack>
    </Paper>
    </div>
  );
}

export default Login;