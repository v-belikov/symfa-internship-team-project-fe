import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@core/hooks';

export type GuardProps = {
  canActivate: (user?: any) => boolean;
  redirect: string;
};

export const guard =
  <TProps extends Record<string, any>>(
    Component: FC<TProps>,
  ): FC<GuardProps & TProps> =>
  ({ canActivate, redirect, ...props }) => {
    const user = useAppSelector(state => state.user.user);

    return canActivate(user) ? (
      <Component {...(props as unknown as TProps)} />
    ) : (
      <Navigate to={redirect} />
    );
  };
