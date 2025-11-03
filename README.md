

# File Manager CLI

1.  **Download the project files** or clone the repository to your local machine.
2.  **Open your terminal** and navigate to the project's root directory.
3.  **Start the application** by running the following command. Be sure to replace `your_username` with a name of your choice.

    ```bash
    npm run start -- --username=your_username
    ```

Upon starting, you will see a welcome message and your current working directory.

## Command API

Here is a list of all available commands and their syntax.

---

### Navigation & Working Directory

| Command | Syntax | Description |
| :--- | :--- | :--- |
| **up** | `up` | Go one directory up from the current directory. Does nothing if you are in the root directory. |
| **cd** | `cd path_to_directory` | Change the current directory to the specified path. The path can be relative or absolute. |
| **ls** | `ls` | List all files and folders in the current directory. The list is sorted alphabetically, with folders appearing before files. |

---

### Basic File Operations

| Command | Syntax | Description |
| :--- | :--- | :--- |
| **cat** | `cat path_to_file` | Reads the content of a file and prints it to the console. |
| **add** | `add new_file_name` | Creates a new empty file in the current directory. |
| **mkdir** | `mkdir new_directory_name`| Creates a new directory in the current directory. |
| **rn** | `rn path_to_file new_filename` | Renames a file. The `new_filename` should be just the name, not a path. |
| **rm** | `rm path_to_file` | Deletes a file. |

---

### Advanced File Operations (Stream-based)

| Command | Syntax | Description |
| :--- | :--- | :--- |
| **cp** | `cp path_to_file path_to_new_directory` | Copies a file from its source to a new directory. |
| **mv** | `mv path_to_file path_to_new_directory` | Moves a file. This is equivalent to copying the file and then deleting the original. |

---

### Operating System Information

| Command | Syntax | Description |
| :--- | :--- | :--- |
| **os** | `os --EOL` | Prints the default system End-Of-Line characters (e.g., `\n` on Linux/macOS, `\r\n` on Windows). |
| **os** | `os --cpus` | Displays information about the host machine's CPUs, including the model and clock speed for each core. |
| **os** | `os --homedir` | Shows the current user's home directory. |
| **os** | `os --username` | Shows the current system user's name. |
| **os** | `os --architecture` | Prints the CPU architecture for which the Node.js binary was compiled (e.g., `x64`). |

---

### Hash Calculation

| Command | Syntax | Description |
| :--- | :--- | :--- |
| **hash** | `hash path_to_file` | Calculates the SHA256 hash for a file and prints it to the console. |

---

### Compression & Decompression

| Command | Syntax | Description |
| :--- | :--- | :--- |
| **compress** | `compress path_to_file path_to_destination`
| **decompress**| `decompress path_to_file path_to_destination` 

---

### Exiting the Application

| Command | Description |
| :--- | :--- |
| **.exit** | Gracefully exits the application and prints a goodbye message. |
| **Ctrl + C** | Can also be used to exit the application at any time. |
