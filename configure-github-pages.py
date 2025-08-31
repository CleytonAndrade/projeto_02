#!/usr/bin/env python3
"""
Script para configurar automaticamente o projeto para GitHub Pages
Substitui os placeholders [SEU-USUARIO] e [NOME-DO-REPOSITORIO] pelos valores corretos.
"""

import os
import re
import sys

def configure_github_pages():
    """Configura o projeto para GitHub Pages substituindo placeholders."""
    
    print("🚀 Configurador do GitHub Pages - Projeto Economia Sustentável")
    print("=" * 60)
    
    # Solicita informações do usuário
    username = input("Digite seu nome de usuário do GitHub: ").strip()
    if not username:
        print("❌ Nome de usuário é obrigatório!")
        return False
    
    repo_name = input("Digite o nome do repositório: ").strip()
    if not repo_name:
        print("❌ Nome do repositório é obrigatório!")
        return False
    
    print(f"\n📝 Configurando para:")
    print(f"   Usuário: {username}")
    print(f"   Repositório: {repo_name}")
    print(f"   URL final: https://{username}.github.io/{repo_name}")
    
    confirma = input("\n✅ Confirma essas informações? (s/N): ").strip().lower()
    if confirma not in ['s', 'sim', 'y', 'yes']:
        print("❌ Operação cancelada.")
        return False
    
    # Arquivos para processar
    files_to_process = ['index.html']
    
    for filename in files_to_process:
        if not os.path.exists(filename):
            print(f"⚠️  Arquivo {filename} não encontrado, pulando...")
            continue
        
        print(f"🔄 Processando {filename}...")
        
        try:
            # Lê o arquivo
            with open(filename, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Faz as substituições
            content = content.replace('[SEU-USUARIO]', username)
            content = content.replace('[NOME-DO-REPOSITORIO]', repo_name)
            
            # Salva o arquivo
            with open(filename, 'w', encoding='utf-8') as file:
                file.write(content)
            
            print(f"✅ {filename} configurado com sucesso!")
            
        except Exception as e:
            print(f"❌ Erro ao processar {filename}: {e}")
            return False
    
    print("\n🎉 Configuração concluída!")
    print("\n📋 Próximos passos:")
    print("1. Crie um repositório no GitHub com o nome:", repo_name)
    print("2. Faça upload de todos os arquivos")
    print("3. Ative o GitHub Pages nas configurações")
    print("4. Acesse:", f"https://{username}.github.io/{repo_name}")
    print("\n📖 Para instruções detalhadas, veja DEPLOY.md")
    
    return True

def main():
    """Função principal."""
    try:
        configure_github_pages()
    except KeyboardInterrupt:
        print("\n\n❌ Operação interrompida pelo usuário.")
    except Exception as e:
        print(f"\n❌ Erro inesperado: {e}")
        return 1
    
    return 0

if __name__ == "__main__":
    sys.exit(main())
