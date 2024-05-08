type Log = {
  log(): void;
};

type DbLog = Log & {
  closeConnection(): void;
  openConnection(): void;
};

type FileLog = Log & {
  closeFile(): void;
  openFile(): void;
  checkFileSize(): void;
  generateFileName(): void;
};

class DbLogger implements DbLog {
  log(): void {
    throw new Error('Method not implemented.');
  }

  closeConnection(): void {
    throw new Error('Method not implemented.');
  }

  openConnection(): void {
    throw new Error('Method not implemented.');
  }
}

class FileLogger implements FileLog {
  log(): void {
    throw new Error('Method not implemented.');
  }

  closeFile(): void {
    throw new Error('Method not implemented.');
  }

  openFile(): void {
    throw new Error('Method not implemented.');
  }

  checkFileSize(): void {
    throw new Error('Method not implemented.');
  }

  generateFileName(): void {
    throw new Error('Method not implemented.');
  }
}
