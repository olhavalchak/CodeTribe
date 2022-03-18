import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { CustomedCard, CustomedTypography } from '../../customComponents';

export const Step3 = () => (
    <CustomedCard sx={{ maxWidth: 300 }}>
      <CardContent>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <CustomedTypography variant="subtitle1" component="div" sx={{color: 'success'}}>
            YOUR INVITATION WAS SENT SUPER SUCCESSFULLY.
          </CustomedTypography>
          <Typography variant="body2">
            You can send another.
          </Typography>
          <Button
            style={{background: '#E2E2E2'}}
            sx={{ borderRadius: '100px' }}
            variant="contained"
            fullWidth
          >
            GOT IT!
          </Button>
        </Grid>
      </CardContent>
    </CustomedCard>
);
