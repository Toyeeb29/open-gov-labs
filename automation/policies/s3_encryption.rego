# Deny S3 buckets that do not declare server-side encryption.
# Evaluated against datasets/iac-fixtures/s3_buckets.json (not live AWS).

package acme.s3

deny[msg] {
  bucket := input.buckets[_]
  not bucket.encryption
  msg := sprintf("bucket %s has no encryption block", [bucket.name])
}

deny[msg] {
  bucket := input.buckets[_]
  bucket.public == true
  msg := sprintf("bucket %s is public", [bucket.name])
}
