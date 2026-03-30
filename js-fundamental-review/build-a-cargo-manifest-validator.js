/**

* ============================================================
* PROBLEM - Cargo Manifest Validator
* ============================================================
*
* Build functions to:
* 1. Normalize cargo weight units to kilograms.
* 2. Validate manifest properties.
* 3. Process manifest and log validation result.
*
* Manifest properties:
* * containerId : positive integer
* * destination : non-empty string (trimmed)
* * weight      : positive number
* * unit        : "kg" | "lb"
* * hazmat      : boolean
*
* ============================================================
*/

/*  ============================================================
MY CODE
============================================================ */

const normalizeUnits = (manifest) => {
const normalizedManifest = { ...manifest };

if (normalizedManifest.unit === "lb") {
normalizedManifest.unit = "kg";
normalizedManifest.weight = normalizedManifest.weight * 0.45;
return normalizedManifest;
}

return normalizedManifest;
};

function validateManifest(manifest) {
const errors = {};

// containerId
if (!("containerId" in manifest)) {
errors.containerId = "Missing";
} else if (
!Number.isInteger(manifest.containerId) ||
manifest.containerId <= 0
) {
errors.containerId = "Invalid";
}

// destination
if (!("destination" in manifest)) {
errors.destination = "Missing";
} else if (
typeof manifest.destination !== "string" ||
manifest.destination.trim().length === 0
) {
errors.destination = "Invalid";
}

// weight
if (!("weight" in manifest)) {
errors.weight = "Missing";
} else if (
typeof manifest.weight !== "number" ||
Number.isNaN(manifest.weight) ||
manifest.weight <= 0
) {
errors.weight = "Invalid";
}

// unit
if (!("unit" in manifest)) {
errors.unit = "Missing";
} else if (
manifest.unit !== "kg" &&
manifest.unit !== "lb"
) {
errors.unit = "Invalid";
}

// hazmat
if (!("hazmat" in manifest)) {
errors.hazmat = "Missing";
} else if (typeof manifest.hazmat !== "boolean") {
errors.hazmat = "Invalid";
}

return errors;
}

const processManifest = (manifest) => {
const errors = validateManifest(manifest);

let hasErrors = false;
for (let key in errors) {
hasErrors = true;
break;
}

if (!hasErrors) {
console.log(`Validation success: ${manifest.containerId}`);
const total = normalizeUnits(manifest);
console.log(`Total weight: ${total.weight} kg`);
} else {
console.log(`Validation error: ${manifest.containerId}`);
console.log(validateManifest(manifest));
}
};

/*  ============================================================
OPTIMIZED CODE
============================================================ */

const processManifestOptimized = (manifest) => {
const errors = validateManifest(manifest);

if (Object.keys(errors).length === 0) {
console.log(`Validation success: ${manifest.containerId}`);
const normalized = normalizeUnits(manifest);
console.log(`Total weight: ${normalized.weight} kg`);
} else {
console.log(`Validation error: ${manifest.containerId}`);
console.log(errors);
}
};

/*  ============================================================
MY MISTAKES
============================================================

1. Membandingkan object dengan ===
  validateManifest(manifest) === {}
  -> Salah karena object dibandingkan reference bukan value.

2. Tidak menyimpan hasil validateManifest ke variable
  -> menyebabkan fungsi dipanggil berulang.

3. Mengira destructuring akan mengubah object asli
  -> destructuring hanya copy value, bukan reference.

4. Tidak memahami cara mengecek object kosong
  -> perlu loop atau Object.keys()

5. Hampir memodifikasi object original
  -> harus selalu return object baru (immutability)

*/

/*  ============================================================
KEY TAKEAWAYS
============================================================

1. Object tidak bisa dibandingkan dengan ===
  {} === {} -> false

2. Untuk cek object kosong:
  * for...in loop
  * Object.keys(obj).length === 0

3. Gunakan spread operator untuk clone object
  const copy = { ...original }

4. Destructuring tidak mengubah object asli
  let { weight } = obj -> hanya copy value

5. Validasi number harus cek:
  * typeof === "number"
  * !Number.isNaN()
  * > 0

6. Validasi integer gunakan:
  Number.isInteger()

7. Validasi string kosong:
  str.trim().length === 0

8. Jangan mutate parameter function
  -> selalu return object baru

9. Simpan hasil function ke variable
  const errors = validateManifest(manifest)

10. Pattern validasi umum:
* Missing check
* Invalid check
* return errors object

============================================================
*/
