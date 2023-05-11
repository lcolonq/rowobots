{
  description = "shell for building rowobots";

  inputs = {
    nixpkgs.url = github:NixOS/nixpkgs/nixos-unstable;
    naersk.url = "github:nix-community/naersk";
  };

  outputs = { self, nixpkgs, naersk }:
    let
      pkgs = nixpkgs.legacyPackages.x86_64-linux;
      naersk' = pkgs.callPackage naersk {};
      buildInputs = [
        pkgs.gcc
        pkgs.pkg-config
        pkgs.openssl
      ];
      shell = pkgs.mkShell {
        inherit buildInputs;
      };
      rowobots = naersk'.buildPackage {
        inherit buildInputs;
        src = ./.;
      };
    in {
      defaultPackage.x86_64-linux = rowobots;
      devShell.x86_64-linux = shell;
      packages.x86_64-linux = {
        inherit rowobots shell;
      };
    };
}
