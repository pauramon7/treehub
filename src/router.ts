import { Router } from "express";
import { body } from "express-validator";
import { createAccount, login } from "./handlers";
import { handleInputErrors } from "./middleware/validation";

const router = Router();

// Autenticación y Registro
router.post(
  "/auth/register",
  body("handle").notEmpty().withMessage("El handle es requerido"),
  body("name").notEmpty().withMessage("El name es requerido"),
  body("email").notEmpty().isEmail().withMessage("E-mail no valido"),
  body("password")
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres`"),
    handleInputErrors,
  createAccount
);

router.post(
  "/auth/login",
  body("email").notEmpty().isEmail().withMessage("E-mail no valido"),
  body("password")
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres`"),
    handleInputErrors,
  login
);

export default router;
