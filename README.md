# vender-bender

This is a React front-end for a virtual vendor machine.

## Build instructions

This can be built and launched with NPM.

    $ git clone git@github.com:ihsw/vender-bender.git
    Cloning into 'vender-bender'...
    remote: Counting objects: 244, done.
    remote: Compressing objects: 100% (135/135), done.
    remote: Total 244 (delta 143), reused 184 (delta 83), pack-reused 0
    Receiving objects: 100% (244/244), 168.55 KiB | 1.50 MiB/s, done.
    Resolving deltas: 100% (143/143), done.
    $ cd vender-bender
    $ npm install
    added 1242 packages in 8.647s
    $ npm start
    > react-scripts-ts start

## Features

- [x] Lists products (name, two-digit code, quantity in stock)
- [x] Form for entering code, money
- [x] Allows purchasing product for provided money, chosen by entering code
- [x] Form has a cancel button that clears money entered
- [x] Product listing has stock level, allows restocking when depleted
