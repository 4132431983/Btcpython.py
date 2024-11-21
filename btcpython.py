import os
import subprocess

def send_btc(wallet_path, recipient_address, amount):
    # Ensure the Bitcoin Core daemon is running
    subprocess.run(['bitcoind', '-daemon'])

    # Use the Bitcoin CLI to send BTC
    command = [
        'bitcoin-cli',
        '-datadir={}'.format(wallet_path),
        'sendtoaddress',
        recipient_address,
        str(amount)
    ]

    try:
        result = subprocess.run(command, check=True, capture_output=True, text=True)
        print("Transaction successful: ", result.stdout)
    except subprocess.CalledProcessError as e:
        print("Error occurred: ", e.stderr)

# Example usage
wallet_path = '/path/to/your/wallet'
recipient_address = 'recipient_bitcoin_address'
amount = 0.01  # Amount of BTC to send

send_btc(wallet_path, recipient_address, amount)