import binascii
import os

from cryptography.hazmat.primitives.hashes import SHA512, Hash


def create_token():
    return binascii.hexlify(os.urandom(32)).decode()


def hash_token(token: str):
    hash = Hash(SHA512())
    hash.update(binascii.unhexlify(token))
    return binascii.hexlify(hash.finalize()).decode()
