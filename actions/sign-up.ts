'use server';

import { SignUpSchema } from '@/schemas';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/lib/tokens';
import { sendVerficationEmail } from '@/lib/mail';

const signUpAction = async (values: z.infer<typeof SignUpSchema>) => {
  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Validation error' };
  }

  const { password, email, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const userExist = await getUserByEmail(email);

  if (userExist) {
    return { error: 'Email already in use!' };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  await sendVerficationEmail(verificationToken.email, verificationToken.token);

  return { success: 'Email send' };
};

export { signUpAction };
