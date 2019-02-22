// Problem 59
//
// This problem was asked by Google.
//
// Implement a file syncing algorithm for two computers over a low-bandwidth network.
// What if we know the files in the two computers are mostly the same?

// Use a Merkle Tree. https://en.wikipedia.org/wiki/Merkle_tree
// The leaves of a Merkle Tree represents the files, while other nodes represents directories
// If the root hash is the same, then both computers have the same files.
// Else Compare both trees and sync files when the hash data is different
