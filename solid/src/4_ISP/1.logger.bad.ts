{
  type Log = {
    log(): void;
    closeConnection?(): void;
    openConnection?(): void;
    closeFile?(): void;
    openFile?(): void;
    checkFileSize?(): void;
    generateFileName?(): void;
  };

  class DbLogger implements Log {
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

  class FileLogger implements Log {
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
}
