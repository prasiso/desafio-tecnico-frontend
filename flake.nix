{
  description = "Yarn Development Flake";
  inputs = {
    nixpkgs = {url = "github:NixOS/nixpkgs/nixos-25.05";};
    flake-utils = {url = "github:numtide/flake-utils";};
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs {inherit system;};
      shellHook = ''
        # Go to the user $SHELL
        export PATH="''${PWD}/node_modules/.bin:''${PATH}"
      '';
    in
      with pkgs; {
        formatter = nixpkgs.legacyPackages.${system}.alejandra;

        devShell = pkgs.mkShell {
          shellHook = shellHook;
          buildInputs = [
            nodejs
            pnpm
            nodePackages.prettier
          ];
        };
      });
}

