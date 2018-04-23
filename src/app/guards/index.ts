import { NotAuthenticatedGuard } from './not-authenticated.guard';
import { AuthenticatedGuard } from './authenticated.guard';

export const guards = [AuthenticatedGuard, NotAuthenticatedGuard];