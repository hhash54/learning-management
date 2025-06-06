"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const transactionsController_1 = require("../controllers/transactionsController");
const router = express_1.default.Router();
router.get("/", transactionsController_1.listTransactions);
router.post("/", transactionsController_1.createTransaction);
router.post("/stripe/payment-intent", transactionsController_1.createStripePaymentIntent);
exports.default = router;
