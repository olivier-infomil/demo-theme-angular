import { Injectable } from '@angular/core';
import * as JSEncrypt from 'jsencrypt';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  private publicKey = `-----BEGIN PUBLIC KEY-----
  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCApH/ClA1bVvIR2ace2H7h6Yk3
  tnwqequ/A4KX+7H6sgjosQc2phC9JAybsnN/W8F5/Cm7uKNBrOZOpIMs9FRD445E
  jw0IP/i85o/Rf94E+VDqqHGIgHtyb70oF4KQOgAB0XbIDzUZYnx/yHviV1TnLUaI
  RwbeQYzYBSY379JHGQIDAQAB
  -----END PUBLIC KEY-----`;

  private privateKey = `-----BEGIN RSA PRIVATE KEY-----
  MIICWwIBAAKBgQCApH/ClA1bVvIR2ace2H7h6Yk3tnwqequ/A4KX+7H6sgjosQc2
  phC9JAybsnN/W8F5/Cm7uKNBrOZOpIMs9FRD445Ejw0IP/i85o/Rf94E+VDqqHGI
  gHtyb70oF4KQOgAB0XbIDzUZYnx/yHviV1TnLUaIRwbeQYzYBSY379JHGQIDAQAB
  AoGAaTkkn53GRx4ZJuynPB3Nuy/w4zdK3Nw2Oym92l8wN2UE0IBs7BBtxKgGABy5
  SEVfPk46PKhMMV4hi9YYzd6URTanIHu9t9BH4c2ZZTpVRZwIx+ghVtmXkHULmyb/
  U7pDi4f2hvkuXrn8mvlzrQtlBbB4xiWO1Sk5TAJlqtauwrkCQQDxAM6ouSQr3nJd
  NB7+GhNNHEzos+H6oe/ZKvK/Q39bivZiayB3XJZEzaFL4lyZD1rCnuBx9bHVdO/H
  8opLsCQHAkEAiKXILcxS4bPfof6WqqHp2oRtEmZ2dPiDUhk2lV8dvIGa/X3L1OjV
  515ny0d015T6+76YNHqE/W5s4x3lTb6z3wJAZKrwp9uF92kYnkP6OivMKiaLHZyd
  5SIlXLIq6aeZGDToi92xlwounpjCKj9obGrUf3z7xb5aRQ5uZjeyesEdmwJACWuU
  X0PkutaRpjNM47qByqSyeEBEDlBLjU9bqfSCskolCzCu6qCajna9pQ/qCCqnGs/K
  4mNH48jHDOk0s6Vf9QJACvQIdSaGZIRh9GoEU1BqUo5aJVhCpnkYzEPAvggltnFs
  MclkZ1u6dq1mnjiTWqxz5M9NLos/8/fAL7eAxsC9Rw==
  -----END RSA PRIVATE KEY-----`;

  private keySize = 1024;

  constructor() { }

  encryptData(data: string):  any {
    const encryptor = new JSEncrypt.JSEncrypt({ default_key_size: this.keySize.toString()});
    encryptor.setPublicKey(this.publicKey);
    return encryptor.encrypt(data);
  }

  decryptData(encryptedData: string): any {
    const decryptor = new JSEncrypt.JSEncrypt({ default_key_size: this.keySize.toString()});
    decryptor.setPrivateKey(this.privateKey);
    return decryptor.decrypt(encryptedData);
  }

}
