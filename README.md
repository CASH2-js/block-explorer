Blockchain-Explorer
Block explorer for CASH2 CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon cash2. It should be accessible from the Internet. Run cash2d with open port as follows:
```bash
./cash2 --enable-cors="*" --enable-blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=8080
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.
